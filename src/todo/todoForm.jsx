import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/IconButton";

export default (props) => {
  return (
    <div>
      <div className="col-lg-6 col-md-12">
        <div>
          <div role="form2" className="todoForm">
            <Grid cols="2 4 4">
              <input
                id="search"
                type="text"
                className="form-control"
                value={props.search}
                onChange={props.handleAddSearch}
              />
            </Grid>

            <Grid cols="3 5 5">
              <IconButton
                style="primary"
                onClick={props.handleSearch}
                icon="search"
              />
            </Grid>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-12">
        <div>
          <Grid cols="2 4 4">
            <input
              id="decription"
              type="text"
              className="form-control"
              value={props.description}
              onChange={props.handleAddDescription}
            />
          </Grid>
        </div>

        <Grid cols="3 5 5">
          <IconButton style="primary" onClick={props.handleAdd} icon="plus" />
        </Grid>
      </div>
    </div>
  );
};
