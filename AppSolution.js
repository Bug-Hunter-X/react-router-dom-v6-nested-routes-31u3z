import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <div>Home</div> }
function About() { return <div>About</div> }

function Users() {
  return (
    <div>
      <h2>Users</h2>
      <Routes>
          <Route path=':userId' element={<User />} />
      </Routes>
    </div>
  );
}

function User() {
    let { userId } = useParams();
    return (
        <div>User {userId}</div>
    );
}

function NotFound() { return <div>404 Not Found</div> }