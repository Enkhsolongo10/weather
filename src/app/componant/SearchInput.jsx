import { SearchIcon } from "./SearchIcon";

export const SearchInput = () => {
    return (
        <div className="border border-transparent drop-shadow-sm rounded-[24px]">
            <button>
                <SearchIcon />
            </button>
            <input 
            className="w-full outline-none mr-1"
            type="text"
            placeholder="City name..."
            />
        </div>
    );
};