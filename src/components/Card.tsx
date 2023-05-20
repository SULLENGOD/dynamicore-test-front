interface Contact {
  username: string;
  email: string;
}

export const Card = ({ contact }: { contact: Contact }) => {
  return (
    <div className="card m-auto mb-3 text-center p-3" style={{ width: "18rem" }}>
      <img
        src="https://gvzoo.com/cms-data/gallery/blog/animals/capybara/banner-capybara-sq.jpg"
        className="card-img-top rounded-circle"
      />
      <div className="card-body">
        <h1 className="card-text">{contact.username}.</h1>
      </div>
    </div>
  );
};
