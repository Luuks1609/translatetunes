async function load({ params }) {
  return {
    props: {
      artistId: params.id
    }
  };
}
export {
  load
};
