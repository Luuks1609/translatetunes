async function load({ params }) {
  return {
    props: {
      albumId: params.id
    }
  };
}
export {
  load
};
