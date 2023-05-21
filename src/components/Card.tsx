import { deleteContact} from "../api/api";

interface Contact {
  username: string;
  email: string;
}

interface CardProps {
    contact: Contact;
    userId: string;
}

export interface DeleteInfo {
    userId: string;
    userEmail: string;
}

export const Card = ({ contact, userId }: CardProps) => {
    const token = localStorage.getItem("token") ?? "";

    const onDeleteContact = async() => {
        const req: DeleteInfo = {
            userId: userId,
            userEmail: contact.email
        }
        
        await deleteContact( req, token)
        
        window.location.reload();
    }
    
  return (
    <div className="card m-auto mb-3 text-center p-3" style={{ width: "18rem"}}>
      <img
        src="https://gvzoo.com/cms-data/gallery/blog/animals/capybara/banner-capybara-sq.jpg"
        className="card-img-top rounded-circle"
      />
      <div className="card-body">
        <h1 className="card-title">{contact.username}.</h1>
        <button className="btn btn-danger" onClick={onDeleteContact}>
            Remove
        </button>
      </div>
    </div>
  );
};
