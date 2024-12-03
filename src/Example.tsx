import {Button} from "@mui/material";
import {useSnack} from "./useSnack.ts";

function Example() {
  const snack = useSnack()

  return (
    <Button onClick={() => snack.show(Math.random())} variant="contained">
      Test
    </Button>
  );
}

export default Example;