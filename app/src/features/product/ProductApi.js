// A mock function to mimic making an async request for data
export function fetchAllProduct() {
  return new Promise(async (resolve) => {
    const respose = await fetch("http://localhost:8000/products");
    const data = await respose.json();
    resolve({ data });
  });
}

export function fetchAllProductByFilter(filter,sort,pagination) {
  let queryString = ""
  for(let key in filter) {
    const categaryValues = filter[key]
    if (categaryValues.length ) {
      const lastCate = categaryValues[categaryValues.length -1]
      queryString += `${key}=${lastCate}&`
    }
  }

  for(let key in sort){
    queryString += `${key}=${sort[key]}&`
  }

  for(let key in pagination){
    queryString += `${key}=${pagination[key]}&`
  }

  return new Promise(async (resolve) => {
    const respose = await fetch("http://localhost:8000/products?"+queryString);
    const data = await respose.json();
    const totalItems = respose.headers.get("X-Total-Count")
    resolve({ data:{products:data , totalItems : +totalItems} });
  });
}


export const fetchProductById = (id) => {
  return new Promise(async (resolve) => {
    const respose = await fetch("http://localhost:8000/products/"+id);
    const data = await respose.json();
    resolve({ data });
  });
}
