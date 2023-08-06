// GET REQUEST
function getTodos() {
  // axios({
  //   url: "https://jsonplaceholder.typicode.com/todos",
  // })
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   })

  // axios({
  //   url: "https://jsonplaceholder.typicode.com/todos/1",
  //   method: "get"
  // }).then((res) => {
  //   showOutput(res)
  // })

  // axios({
  //   url: "https://jsonplaceholder.typicode.com/todos",
  //   method: "get",
  //   params: {
  //     _limit: 5
  //   }
  // })
  //   .then((res) => {
  //     showOutput(res)
  //   })
  //   .catch((err) => {
  //     showOutput(err)
  //   })

  axios.get(
    "https://jsonplaceholder.typicode.com/todos",
    {
      _limit: 5
    })
    .then((res) => {
      showOutput(res);
    })
    .catch((err) => {
      showOutput(err)
    })

}

// POST REQUEST
function addTodo() {
  // axios({
  //   url: "https://jsonplaceholder.typicode.com/todos",
  //   method: "post",
  //   data: {
  //     title: "new item",
  //     completed: false
  //   }
  // })
  //   .then((res) => {
  //     showOutput(res);
  //     console.log(res);
  //   })


  axios.post(
    "https://jsonplaceholder.typicode.com/todos",
    {
      title: "new item",
      completed: false
    })
    .then((res) => {
      showOutput(res)
    })
    .catch((err) => {
      showOutput(err)
    })
}

// PUT/PATCH REQUEST
function updateTodo() {
  // axios({
  //   url: "https://jsonplaceholder.typicode.com/todos/1",
  //   method: "put",
  //   data: {
  //     title: "updated item",
  //     completed: true
  //   }
  // })
  //   .then((res) => {
  //     showOutput(res)
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })


  // axios({
  //   url: "https://jsonplaceholder.typicode.com/todos/1",
  //   method: "patch",
  //   data: {
  //     title: "updated item",
  //     completed: true
  //   }
  // })
  //   .then((res) => {
  //     showOutput(res)
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })

  // axios.patch(
  //   "https://jsonplaceholder.typicode.com/todos/1",
  //   { title: "updated item", completed: true })
  //   .then((res) => showOutput(res))
  //   .catch((err) => showOutput(err))

  axios.put(
    "https://jsonplaceholder.typicode.com/todos/1",
    { title: "updated item", completed: true })
    .then((res) => showOutput(res))
    .catch((err) => showOutput(err))
}

// DELETE REQUEST
function removeTodo() {
  // axios({
  //   url: "https://jsonplaceholder.typicode.com/todos/1",
  //   method: "delete",
  // })
  //   .then((res) => {
  //     showOutput(res);
  //     console.log("res", res);
  //   })
  //   .catch((err) => {
  //     showOutput(err)
  //   })


  axios.delete("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => {
      showOutput(res);
    })
    .catch((res) => {
      showOutput(res)
    })
}

// SIMULTANEOUS DATA
function getData() {
  // axios.all(
  //   [axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5"),
  //   axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")]
  // ).then((res) => {
  //   console.log(res[0], res[1]);
  //   showOutput(res[1]);
  // }).catch((err) => console.error(err));

  axios.all([
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5"),
    axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
  ])
    .then(axios.spread((res1, res2) => {
      showOutput(res1);
      console.log(res1, res2);
    }))
    .catch((err) => {
      console.error(err);
    })
}

// CUSTOM HEADERS
function customHeaders() {
  config = {
    header: {
      'Content-Type': 'application-json',
      Authorization: "token"
    }
  }

  axios.get(
    "https://jsonplaceholder.typicode.com/todos",
    {
      _limit: 5
    },
    config)
    .then((res) => {
      showOutput(res);
    })
    .catch((err) => {
      showOutput(err)
    })
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  const options = {
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/todos',
    data: {
      title: 'Hello World'
    },
    transformResponse: axios.defaults.transformResponse.concat(data => {
      data.title = data.title.toUpperCase();
      return data;
    })
  };

  axios(options).then(res => showOutput(res));
}

// ERROR HANDLING
function errorHandling() {
  axios
    .get('https://jsonplaceholder.typicode.com/todoss', {
      // validateStatus: function(status) {
      //   return status < 500; // Reject only if status is greater or equal to 500
      // }
    })
    .then(res => showOutput(res))
    .catch(err => {
      if (err.response) {
        // Server responded with a status other than 200 range
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);

        if (err.response.status === 404) {
          alert('Error: Page Not Found');
        }
      } else if (err.request) {
        // Request was made but no response
        console.error(err.request);
      } else {
        console.error(err.message);
      }
    });
}

// CANCEL TOKEN
function cancelToken() {
  const source = axios.CancelToken.source();

  axios
    .get('https://jsonplaceholder.typicode.com/todos', {
      cancelToken: source.token
    })
    .then(res => showOutput(res))
    .catch(thrown => {
      if (axios.isCancel(thrown)) {
        console.log('Request canceled', thrown.message);
      }
    });

  if (true) {
    source.cancel('Request canceled!');
  }
}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use((config) => {
  console.log(`${(config.method).toUpperCase()} request sent to ${config.url} at ${new Date()}`);
})

// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
