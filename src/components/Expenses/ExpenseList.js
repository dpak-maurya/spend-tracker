import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ expenses }) {
  return (
    <Card className='expenses'>
      {expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
}
