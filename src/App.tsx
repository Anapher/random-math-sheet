import {
  Container,
  Fab,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";
import React, { useEffect, useState } from "react";
import { ArithmeticTasks, generate } from "./generator";

const useStyles = makeStyles({
  container: {
    height: "100%",
    position: "relative",
    overflowY: "hidden",
  },
  tableContainer: {
    overflowY: "scroll",
    height: "100%",
  },
  fab: {
    position: "absolute",
    bottom: 32,
    right: 48,
  },
});

function App() {
  const [tasks, setTasks] = useState<ArithmeticTasks[]>([]);

  const handleGenerateTasks = () => setTasks(generate(40));

  useEffect(() => {
    handleGenerateTasks();
  }, []);

  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.container}>
      <div className={classes.tableContainer}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Aufgabe</TableCell>
              <TableCell>Ergebnis</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((row, i) => (
              <TableRow key={i}>
                <TableCell>{`${row.num1} * ${row.num2}`}</TableCell>
                <TableCell>{row.result}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Fab
        color="primary"
        aria-label="refresh"
        className={classes.fab}
        onClick={handleGenerateTasks}
      >
        <RefreshIcon />
      </Fab>
    </Container>
  );
}

export default App;
