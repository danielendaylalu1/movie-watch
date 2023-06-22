const page = ({ params }) => {
  const header = params.id.replace(/-/g, " ");
  return <h2 className="">{header}</h2>;
};

export default page;
