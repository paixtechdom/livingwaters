import axios from "axios";



export const TrimText = (text) => {

  let trimmedText = text

  for (let i = 0; i < text.length; i++) {

      trimmedText = trimmedText.replace(' ', '')        
      trimmedText = trimmedText.replace('+', 'plus')        
      trimmedText = trimmedText.replace('/', 'plus')        
      trimmedText = trimmedText.replace(/[^a-z]/g, '')
      
  }

  return trimmedText.trim().toString()

}

export const DocscrollTop = () => {
  scrollTo({
    top: 0,
    behavior: "smooth"
  })
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


export const fetchMessages = async (startingPoint, searchInput, setMessages, setFetching, messages, setTotal, setShowAlert, setAlertType, setAlertMessage ) => {
  setFetching(true);
  await fetchDataWithRetry(startingPoint, searchInput, setMessages, setFetching, messages, setTotal, setShowAlert, setAlertType, setAlertMessage );
}

const fetchDataWithRetry = async (startingPoint, searchInput, setMessages, setFetching, messages, setTotal, retryCount = 0, setShowAlert, setAlertType, setAlertMessage ) => {
  const maxRetries = 2;
  const retryDelay = 1000; // milliseconds

  try {
    // Fetch total count
    const countResponse = await fetch(`${backendLocation}/messages.php/${searchInput}/count`, {
      method: 'GET'
    });
    const countData = await countResponse.json();
    setTotal(countData[0].total);

    // Fetch messages
    const messagesResponse = await fetch(`${backendLocation}/messages.php/${startingPoint}/10/${searchInput}`, {
      method: 'GET'
    });
    const messagesData = await messagesResponse.json();

    setTimeout(() => {
      setFetching(false);
      setMessages(messages.concat(messagesData));
    }, 500);
  } catch (error) {
    if (retryCount < maxRetries) {
      console.warn(`Retrying fetch... Attempt ${retryCount + 1} of ${maxRetries}`);
      setTimeout(() => {
        fetchDataWithRetry(startingPoint, searchInput, setMessages, setFetching, messages, setTotal, retryCount + 1);
      }, retryDelay);
    } else {
      setFetching(false);
      setShowAlert(true)
      setAlertType('success')
      setAlertMessage('Error fetching messages. Please wait')
      location.reload(true)
    }
  }
}



export const HandleSearch = async (searchInput, setFetching, setMessages, setTotal, setShowAlert, setAlertType, setAlertMessage, no = 10) => {
  setFetching(true);
  setMessages([]);
  console.log("fetching")
  try {
    // Fetch the total count of messages
    const countResponse = await fetchWithRetry(`${backendLocation}/messages.php/${searchInput}/count`, {
      method: 'GET'
    });

    const countData = await countResponse.json();
    console.log(countData)
    setTotal(countData[0].total);

    // Fetch the messages
    const messagesResponse = await fetchWithRetry(`${backendLocation}/messages.php/0/${no}/${searchInput}`, {
      method: 'GET'
    });

    const messagesData = await messagesResponse.json();

    document.documentElement.scrollTop = 0;
    
    setTimeout(() => {
      setFetching(false);
      setMessages(messagesData);
    }, 500);
  } catch (error) {
    setFetching(false);
    setShowAlert(true)
    setAlertType('error')
    setAlertMessage('Error fetching messages. Please wait')    
    // location.reload(true)
  }
};

// Helper function to fetch with retry logic
const fetchWithRetry = async (url, options, retries = 2) => {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      return response;
    } catch (error) {
      if (i === retries - 1) {
        throw error; // Rethrow the error if this was the last attempt
      }
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second before retrying
    }
  }
};



export const FetchImages = async (setImages, lim, page) => {
  await axios.get(`${backendLocation}/images.php/${lim}/${page}`)
    .then((res) => {
      // console.log(res.data)
      setImages(prev => [...prev, res.data])
      // if(page){
      //   setImages(...images, res.data)
      // }else{
      //   setImages(res.data)
      // }
    })
    .catch((error) => {
      console.log(error)
    })


}