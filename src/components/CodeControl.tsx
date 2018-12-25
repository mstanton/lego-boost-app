import LegoBoost from "lego-boost-browser";
import * as React from "react";
import { Grid, TextArea, Button, TextAreaProps, Header, Container } from "semantic-ui-react";
import MessageBlock from "./MessageBlock";

interface IProps {
  boost: LegoBoost;
  infoVisible: boolean;
  onInfoClose: Function;
}

interface IState {
  codeToRun: string;
}

class CodeControl extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      codeToRun: `boost.changeLed();`
    };
  }

  handleItemClick = (e, { name }) => {
    // eval evaluates a string as a JavaScript expression within the current execution scope and can access local variables
    // Typescript eval doesn't create closures on their creation context. They are always created on global scope. Maybe like new Function()?
    (window as any).boost = this.props.boost;
    eval(this.state.codeToRun);
    (window as any).boost = null;
  };

  updateCode = (e,data: TextAreaProps) => {
    this.setState({ codeToRun: data.value.toString() });
  };

  render() {
    return (
      <Container>
        <MessageBlock visible={this.props.infoVisible} onClose={this.props.onInfoClose} content="Under Construction! Control Lego Boost by executing javascript code." />
        
        <Grid centered columns="equal">
        <Grid.Row>
            <Header as="h3">Execute Code Control</Header>
          </Grid.Row>
          <Grid.Row>
            <TextArea
            placeholder="Execute code"
            value={this.state.codeToRun}
            onChange={this.updateCode}
            style={{ minHeight: 100, minWidth:400 }}
          />
          </Grid.Row>
          <Grid.Row>
            <Button primary name="execute" onClick={this.handleItemClick}>Execute</Button>
          </Grid.Row>
          </Grid>
      </Container>
    );
  }
}

export default CodeControl;
