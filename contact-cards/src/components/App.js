import contacts from "./contacts"
import Cards from "./Cards"
function createCard(contact){
  return <Cards 
    key={contact.id}
    name={contact.name}
    img={contact.imgSrc}
    ph={contact.phone}
    email={contact.email}
  />
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
      {/* <Cards
      name={contacts[0].name}
      img={contacts[0].imgSrc}
      ph={contacts[0].phone}
      email={contacts[0].email}
       />
       <Cards
      name={contacts[1].name}
      img={contacts[1].imgSrc}
      ph={contacts[1].phone}
      email={contacts[1].email}
       />
       <Cards
      name={contacts[2].name}
      img={contacts[2].imgSrc}
      ph={contacts[2].phone}
      email={contacts[2].email}
       />  */}
    </div>
  );
}

export default App;
