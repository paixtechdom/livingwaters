import { backendLocation } from "./Constant";

export function delayLoad(promise) {
    return new Promise(resolve => {
      setTimeout(resolve, 1500);
    }).then(() => promise);
  }



  export const ConvertFileSize = (size) => {
    let newSize = 0
    if(size > 1073741824){
      newSize = (size/1024/1024/1024).toFixed(1)
    }
    else if(size > 1048576){
      newSize = (size/1024/1024).toFixed(1)
    }
    else if(size > 1024){
      newSize = (size/1024).toFixed(1)
    }


    return (newSize)+`${size > 1073741824 ? 'g b' : size > 1048576 ? ' mb' : ' kb'}`
  }

  export const FormatDate = (date) =>{
    return new Date(date).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })
  }

  export const FormatId = (id) => {
    return id
      .replaceAll(/[0-9/]/g, "")
      // .replaceAll(/[!@#$%&*()_+=-{}|;:"<>,.?/]/g, "")
      .replaceAll(' ', '')
      .replaceAll('-', '')
      .replaceAll('(', '')
      .replaceAll(')', '')
      .replaceAll(';', '')
      .replaceAll("'", '')
      .replaceAll(',', '')
      .replaceAll('.', '')
      .replaceAll('_', '')
      .replaceAll('|', '')
      .replaceAll(']', '')
      .replaceAll('[', '')
      .replaceAll('{', '')
      .replaceAll('}', '')
      .replaceAll("!", '')
      .replaceAll("~", '')
      .replaceAll("`", '')
      .replaceAll("<", '')
      .replaceAll(">", '')
      .replaceAll('/', '')
      .replaceAll('?', '')
      .replaceAll('#', '')
      .replaceAll('@', '')
  }


  export const fetchMessages = async (startingPoint, searchInput, setMessages, setFetching, messages, setTotal) => {
    setFetching(true)
        await fetch(`${backendLocation}/messages.php/${searchInput}/count`, {
          method: 'GET'
      }).then(resp => {
          return resp.json()
      })
      .then(data => {
        setTotal(data[0].total)
      })
    try{
        await fetch(`${backendLocation}/messages.php/${startingPoint}/${10}/${searchInput}`, {
            method: 'GET'
        }).then(resp => {
            return resp.json()
        })
        .then(data => {
            setTimeout(() => {
              setFetching(false)
              setMessages(messages.concat(data))
            }, 500);
        })
    }catch(error){
        setFetching(false)
        alert('Error fetching message')
    }
}


export const HandleSearch = async (searchInput, setFetching, setMessages, setTotal) => {
  setFetching(true)
  setMessages([])
  await fetch(`${backendLocation}/messages.php/${searchInput}/count`, {
      method: 'GET'
  }).then(resp => {
      return resp.json()
  })
  .then(data => {
      setTotal(data[0].total)
  })
  try{
      await fetch(`${backendLocation}/messages.php/${0}/${10}/${searchInput}`, {
          method: 'GET'
      }).then(resp => {
          return resp.json()
      })
      .then(data => {
          document.documentElement.scrollTop = 0
          setTimeout(() => {
              setFetching(false)
              setMessages(data)
          }, 500);
      })
  }catch(error){
      setFetching(false)
      alert('Error fetching message')
  }

}


