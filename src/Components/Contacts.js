import Contact from './Contact'

const Contacts = ({contacts, onDelete,setContact}) => {
   
    return (
        <>
            {contacts.map((contact)=>{
                return(

                    <Contact key={contact.id} contact={contact} onDelete={onDelete} contacts={contacts} setContact={setContact}/>
                )
            })}
        </>
    )
}

export default Contacts
