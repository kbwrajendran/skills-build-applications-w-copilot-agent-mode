import React, { useEffect, useState } from 'react';

const Users = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;
    fetch(endpoint)
      .then(res => res.json())
      .then(json => {
        const results = json.results || json;
        setData(results);
        console.log('Users API endpoint:', endpoint);
        console.log('Fetched data:', results);
      });
  }, []);
  return (
    <div className="container mt-4">
      <h2 className="mb-3">Users</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, idx) => (
            <tr key={user.id || idx}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Users;
