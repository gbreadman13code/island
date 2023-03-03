export const sendform = async (data, isSuccess) => {
  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
  const csrftoken = getCookie("csrftoken");

  const response = await fetch("https://ostrovkrsk.ru/api/v1/inquiry/", {
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": csrftoken,
    },
    method: "POST",
    body: JSON.stringify(data),
  });

  if (response.status === 201) {
    isSuccess(true)
  }


};
