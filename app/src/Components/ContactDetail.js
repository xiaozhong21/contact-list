const ContactDetail = ({ contactDetails }) => {
  return (
    <div>
      <h1>Fun Fact about {contactDetails.name}</h1>
      <p>{contactDetails.funfact}</p>
    </div>
  );
};

export default ContactDetail;
