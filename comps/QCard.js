import React from "react";
import { Card, Input, Button } from "reactstrap";
//
function QCard({ sculpture, query, handleChange, handleSubmit }) {
  return (
    <div>
      {" "}
      <Card className="qcard">
        <p>{sculpture.question}</p>
        <img alt="slija" src={`/sculptures/${sculpture.img}`} />

        {sculpture.id > 0 ? (
          <form className="form" onSubmit={handleSubmit}>
            <Input
              className="input"
              placeholder="Enter response"
              type="text"
              value={query}
              onChange={handleChange}
            />
            <Button className="button" type="submit">
              enter
            </Button>
          </form>
        ) : (
          <div>Start playing by clicking "Next" below </div>
        )}
      </Card>
    </div>
  );
}

export default QCard;
