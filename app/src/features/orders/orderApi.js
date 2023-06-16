
// to create the order

export function addOrder(order) {
  return new Promise(async (resolve) => {
    const respose = await fetch("http://localhost:8000/orders",{
      method:"POST",
      body : JSON.stringify(order),
      headers : {"content-type":"application/json"}
    });
    const data = await respose.json();
    resolve({ data });
  });
}
