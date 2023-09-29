export const SearchBar = ({ onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button>Button</button>
      </form>
    </div>
  );
};
