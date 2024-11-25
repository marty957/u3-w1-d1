const Title = (prop) => {
  return (
    <>
      <h1>{prop.title}</h1>
      <p className="description">{prop.description}</p>
    </>
  );
};

export default Title;
