async function load({ params }) {
  return {
    props: {
      playlistId: params.id
    }
  };
}
export {
  load
};
