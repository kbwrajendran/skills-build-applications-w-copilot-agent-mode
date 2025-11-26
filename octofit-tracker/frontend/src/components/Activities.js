import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;
    fetch(endpoint)
      .then(res => res.json())
      .then(json => {
        const results = json.results || json;
        setData(results);
        console.log('Activities API endpoint:', endpoint);
        console.log('Fetched data:', results);
      });
  }, []);
  return (
    <div className="container mt-4">
      <h2 className="mb-3">Activities</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {data.map((activity, idx) => (
            <tr key={activity.id || idx}>
              <td>{activity.id}</td>
              <td>{activity.name}</td>
              <td>{activity.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Activities;
