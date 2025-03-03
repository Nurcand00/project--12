
import { Nav } from 'react-bootstrap';
import { Link, LoaderFunctionArgs, Outlet, useLoaderData, useParams } from 'react-router-dom';

interface userDetailParams  {
    id: number;
    name: string;
    username: string;
    email: string;
}
 export const usersDetailLoader = async ({params}: LoaderFunctionArgs) => {
    const response = await fetch (`https://jsonplaceholder.typicode.com/users/${params.userId}`)
    const data = await response.json()
    return data;
 }

function UserDetailsPage() {
    const data = useLoaderData() as userDetailParams;
    const {userId} = useParams();  //bu satırı yazmasaydık aşağıda userId yerıne data.id de kullanabilirdik.
  return (                        //useParams bıze bır anahtar kelıme verıyo kullanabılmemız ıcın ali de yazabilirdik
    <>
   
     <h1>{data.name}</h1>
     <h3>Username: {data.username}</h3>
     <h4>Email: {data.email}</h4>
     <Nav>
      <Nav.Item>  
        <Nav.Link as={Link} to={`/users/${userId}/posts`} >Posts</Nav.Link> 
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to={`/users/${userId}/albums`} eventKey="link-1">Albums</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to={`/users/${userId}/todos`} eventKey="link-2">Todos</Nav.Link>
      </Nav.Item>
    </Nav>
    <Outlet/>
    </>
  )
}

export default UserDetailsPage