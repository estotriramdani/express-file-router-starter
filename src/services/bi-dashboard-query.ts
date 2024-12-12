export const biDashboardQuery = async (query: string) => {
  const data = await fetch(`http://10.10.2.70:4912/api/bi-dashboard`, {
    body: JSON.stringify({
      query,
    }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());

  console.log(data);

  return data;
};
