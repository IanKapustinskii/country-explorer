import "./Selector.css"
import Select from "react-select";

type OptionType = { value: string; label: string };

type SelectorProps = {
    region: string;
    setRegion: (region: string) => void;
};

const options: OptionType[] = [
    { value: "europe", label: "Europe" },
    { value: "asia", label: "Asia" },
    { value: "africa", label: "Africa" },
    { value: "america", label: "America" },
    { value: "oceania", label: "Oceania" },
];

export const Selector = ({ region, setRegion }: SelectorProps) => {
    const selectedOption = options.find(option => option.value === region);

    const handleChange = (selected: OptionType | null) => {
        if (selected) {
            setRegion(selected.value);
        }
    };

    return (
        <Select
            className="custom-select"
            classNamePrefix="react-select"
            options={options}
            value={selectedOption}
            onChange={handleChange}
            isClearable={false}
            isSearchable={false}
        />
    );
};
