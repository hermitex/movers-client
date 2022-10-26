import { useEffect, useState } from "react";

function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          console.log(user);
          return setUser(user);
        });
      }
    });
  }, []);

  return user;
}

export default useAuth;
