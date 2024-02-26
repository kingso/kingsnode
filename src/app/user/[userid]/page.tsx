const Users = ({ params }: { params: { userid: string } }) => {
  return <div>{params.userid}</div>
}

export default Users
