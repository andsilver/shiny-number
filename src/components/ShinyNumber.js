import React from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  Chip,
} from "@material-ui/core";

export function ShinyNumber() {
  const [n, setN] = React.useState(0);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [shinyNumbers, setShinyNumbers] = React.useState([]);

  const handleNChange = (e) => {
    setN(e.target.value);
    setErrorMessage("");
  };

  const generateShinyNumbers = () => {
    const numbers = [];
    let currentNumber = +n + 1;

    if (n !== 0 && !n) {
      setShinyNumbers([]);
      return setErrorMessage("N must be set");
    }

    if (n < 0) {
      setShinyNumbers([]);
      return setErrorMessage("N must be an integer");
    }

    while (numbers.length < 100) {
      const temp = `${currentNumber}`.split("").sort().join("");

      if (+temp === currentNumber) {
        numbers.push(currentNumber);
      }
      currentNumber += 1;
    }
    setShinyNumbers(numbers);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: 36 }}>
      <Card style={{ padding: 24 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          100 Shiny Numbers greater than N
        </Typography>
        <Grid container alignItems="center">
          <Grid item>
            <TextField
              error={!!errorMessage}
              helperText={errorMessage}
              label="Input N"
              type="number"
              value={n}
              onChange={handleNChange}
            />
          </Grid>
        </Grid>
        <Grid container alignItems="center" style={{ marginTop: 12 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={generateShinyNumbers}
          >
            Show Shiny Numbers
          </Button>
        </Grid>
        <Grid
          style={{ margin: "12px 0" }}
          container
          justifyContent="flex-start"
          spacing={1}
        >
          {shinyNumbers.map((sn) => (
            <Grid key={sn} item>
              <Chip label={sn} variant="outlined" />
            </Grid>
          ))}
        </Grid>
      </Card>
    </Container>
  );
}
