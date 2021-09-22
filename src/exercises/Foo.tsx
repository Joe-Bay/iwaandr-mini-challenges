import React from "react";
import { Grid, Typography, Paper, Button } from "@material-ui/core";

/// -------------------- Begin Exercise Code -------------------- ///
/// Code in this block (ended by the similar comment several lines below),
/// are relevant to the excerise. You can ignore all other code

function fooBarBaz(count = 30) {
  for (let i = 1; i <= count; i++) {
    if(i % 3 === 0 && i % 5 === 0){
      console.log('baz')
    }
    else if(i % 3 === 0){
      console.log('foo')
    }
    else if (i % 5 === 0){
      console.log('bar')
    }
    else {
      console.log(i)
    }
  }
}

/// -------------------- End Exercise Code -------------------- ///

interface FooProps {}

const Foo: React.FC<FooProps> = () => {
  return (
    <Grid container direction="column">
      <Paper style={{ padding: 25, marginBottom: 75 }}>
        <Typography variant="h3" align="center">
          Foo / Bar / Baz
        </Typography>
        <Typography paragraph component="div">
          This exercise is to write a small function. There is no UI to write -
          just a function. The dev console is where the output should be
          visible.
        </Typography>
        <Typography paragraph component="div">
          The function should:
          <ol>
            <li>
              <b>Iterate from 1 to 30:</b> this is already how the function
              exists, but that should not be changed.
            </li>
            <li>
              <b>Print every number:</b> on an iteration of the loop, the
              function should log the current number.
            </li>
            <li>
              <b>Print foo, bar, or baz:</b> there is an exception to the
              previous rule. If a number is divisable by 3, print "foo". If the
              number is divisble by 5, print "bar". If the number is divisible
              by both 3 and 5, print "baz". Example console output is:
              <ul>
                <li>1</li>
                <li>2</li>
                <li>foo</li>
                <li>4</li>
                <li>baz</li>
                <li>
                  ... so on, so forth, to 30. Remember that both divisible by 3
                  and 5 should be 'baz'!
                </li>
              </ul>
            </li>
          </ol>
        </Typography>
        <Grid container justifyContent="center">
          <Button variant="contained" onClick={() => fooBarBaz()}>
            Call Function
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Foo;
