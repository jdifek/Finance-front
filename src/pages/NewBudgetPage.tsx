export const NewBudgetPage = () => {
  return (
    <>
      <h1>New budget</h1>

      <form style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
        <input
          className="new-target__input-name"
          placeholder="name"
          type="text"
        />
        <input
          className="new-target__input-name"
          placeholder="name"
          type="text"
        />
        <input
          className="new-target__input-name"
          placeholder="name"
          type="text"
        />
        <input
          className="new-target__input-name"
          placeholder="name"
          type="text"
        />

        <button type='submit'>Save</button>
      </form>
    </>
  );
};
