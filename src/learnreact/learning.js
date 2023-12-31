function Remove({ name, ispacked }) {
  return (
    <>
      {ispacked ? (
        <h3>{name}</h3>
      ) : (
        <del>
          <h2> {name}</h2>{' '}
        </del>
      )}
    </>
  );
}

export const Basic = () => {
  return (
    <>
      <Remove name="arbina" ispacked={true} />
      <Remove name="arbina" ispacked={false} />
      <Remove name="priya" ispacked={true} />
    </>
  );
};
