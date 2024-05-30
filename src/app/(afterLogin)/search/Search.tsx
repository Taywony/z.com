import BackButton from "../_component/BackButton";
import SearchForm from "../_component/SearchForm";

type Props = {
  searchParams: { q: string; f?: string; pf?: string; lf?: string };
};

const Search = ({ searchParams }: Props) => {
  return (
    <div>
      <div>
        <BackButton />
        <SearchForm />
      </div>
    </div>
  );
};

export default Search;
