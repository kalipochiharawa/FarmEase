


    
    function Sidebar ()  {
      return (
        <div className="sidebar">
          <h2>Farmease.</h2>
          <ul className="sidebar-menu">
            <li className="active">
              <span role="img" aria-label="home">🏠</span> Home
            </li>
            <li>
              <span role="img" aria-label="add-product">➕</span> Add Product
            </li>
            <li>
              <span role="img" aria-label="analytics">📊</span> Analytics
            </li>
            <li>
              <span role="img" aria-label="my-profile">👤</span> My Profile
            </li>
            <li>
              <span role="img" aria-label="profile-info">ℹ️</span> Profile Info
            </li>
            <li>
              <span role="img" aria-label="logout">↩️</span> Logout
            </li>
            <li>
              <span role="img" aria-label="delete-account">❌</span> Delete Account
            </li>
          </ul>
        </div>
      );
    };
    
    export default Sidebar;
    

