import { Container } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import { useEffect, useState } from "react";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
import { useSelector, useDispatch } from "react-redux";
import { add, reduce } from "./features/counter";

function App() {
    // console.log(
    //     "redux",
    //     useSelector((state) => state.counter.value)
    // );
    const myObject = useSelector((state) => state.counter.value);

    // Now you can use 'myObject' in your component
    console.log(myObject);

    // console.log(useSelector((state) => state));

    const [entries, setEntries] = useState(initialEntries);
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");
    const [isExpense, setIsExpense] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [entryId, setEntryId] = useState();
    const [incomeTotal, setIncomeTotal] = useState(0);
    const [expenseTotal, setExpenseTotal] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (!isOpen && entryId) {
            const index = entries.findIndex((entry) => entry.id === entryId);
            const newEntries = [...entries];
            console.log(newEntries);
            newEntries[index].description = description;
            newEntries[index].isExpense = isExpense;
            newEntries[index].value = value;
            setEntries(newEntries);
            resetEntry();
        }
        // eslint-disable-next-line
    }, [isOpen]);

    useEffect(() => {
        let totalIncome = 0;
        let totalExpense = 0;

        entries.map((entry) => {
            if (entry.isExpense) {
                return (totalExpense += Number(entry.value));
            }
            return (totalIncome += Number(entry.value));
        });
        setTotal(totalIncome - totalExpense);
        setExpenseTotal(totalExpense);
        setIncomeTotal(totalIncome);
    }, [entries]);

    function deleteEntry(id) {
        const result = entries.filter((entry) => entry.id !== id);
        setEntries(result);
    }

    function addEntry() {
        const result = entries.concat({
            id: entries.length + 1,
            description,
            value,
            isExpense,
        });
        setEntries(result);
        resetEntry();
    }

    function resetEntry() {
        setDescription("");
        setValue("");
        setIsExpense(true);
    }

    function editEntry(id) {
        console.log(`edit entry with id ${id}`);
        if (id) {
            console.log(id);
            const index = entries.findIndex((entry) => entry.id === id);
            const entry = entries[index];
            setEntryId(id);
            setDescription(entry.description);
            setValue(entry.value);
            setIsExpense(entry.isExpense);
            setIsOpen(true);
        }
    }

    return (
        <Container>
            <MainHeader title="Budget" />
            <DisplayBalance title="Your Balance" value={total} size="small" />
            <DisplayBalances
                expenseTotal={expenseTotal}
                incomeTotal={incomeTotal}
            />
            <MainHeader title="History" type="h3" />
            <EntryLines
                entries={entries}
                deleteEntry={deleteEntry}
                editEntry={editEntry}
            />
            <MainHeader title="Add new transaction" type="h3" />
            <NewEntryForm
                addEntry={addEntry}
                description={description}
                value={value}
                isExpense={isExpense}
                setDescription={setDescription}
                setValue={setValue}
                setIsExpense={setIsExpense}
            />
            <ModalEdit
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                addEntry={addEntry}
                description={description}
                value={value}
                isExpense={isExpense}
                setDescription={setDescription}
                setValue={setValue}
                setIsExpense={setIsExpense}
            />
        </Container>
    );
}

export default App;

export var initialEntries = [
    {
        id: 1,
        description: "Salary",
        value: 680000,
        isExpense: false,
    },
    {
        id: 2,
        description: "Electricity bill",
        value: 500,
        isExpense: true,
    },
    {
        id: 3,
        description: "Rent",
        value: 10000,
        isExpense: true,
    },
    {
        id: 4,
        description: "Shopping",
        value: 6000,
        isExpense: true,
    },
];
