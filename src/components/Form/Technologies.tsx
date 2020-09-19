import React from 'react';
import styled from 'styled-components';

const Technologies: React.FC<PropsType> = ({
  onCheckboxesChangeHandler,
  register,
}) => {
  return (
    <>
      <label>Select what technologies do you know</label>
      <Wrapper className="input-field">
        <div>
          <p>
            <label>
              <input
                ref={register}
                name="React"
                id="React"
                onChange={(event) => onCheckboxesChangeHandler(event.target.id)}
                type="checkbox"
              />
              <span>React</span>
            </label>
          </p>
          <p>
            <label>
              <input
                ref={register}
                type="checkbox"
                name="Vue"
                id="Vue"
                onChange={(event) => onCheckboxesChangeHandler(event.target.id)}
              />
              <span>Vue</span>
            </label>
          </p>
          <p>
            <label>
              <input
                ref={register}
                type="checkbox"
                name="express"
                id="express"
                onChange={(event) => onCheckboxesChangeHandler(event.target.id)}
              />
              <span>Express</span>
            </label>
          </p>
          <p>
            <label>
              <input
                ref={register}
                type="checkbox"
                name="mongodb"
                id="mongodb"
                onChange={(event) => onCheckboxesChangeHandler(event.target.id)}
              />
              <span>Mongodb</span>
            </label>
          </p>
          <p>
            <label>
              <input
                ref={register}
                type="checkbox"
                name="MySQL"
                id="MySQL"
                onChange={(event) => onCheckboxesChangeHandler(event.target.id)}
              />
              <span>MySQL</span>
            </label>
          </p>
        </div>
        <div>
          <p>
            <label>
              <input
                ref={register}
                type="checkbox"
                name="Adonis"
                id="Adonis"
                onChange={(event) => onCheckboxesChangeHandler(event.target.id)}
              />
              <span>Adonis</span>
            </label>
          </p>
          <p>
            <label>
              <input
                ref={register}
                type="checkbox"
                name="GraphQL"
                id="GraphQL"
                onChange={(event) => onCheckboxesChangeHandler(event.target.id)}
              />
              <span>GraphQL</span>
            </label>
          </p>
          <p>
            <label>
              <input
                ref={register}
                type="checkbox"
                name="Nest"
                id="Nest"
                onChange={(event) => onCheckboxesChangeHandler(event.target.id)}
              />
              <span>Nest</span>
            </label>
          </p>
          <p>
            <label>
              <input
                ref={register}
                type="checkbox"
                name="Node"
                id="Node"
                onChange={(event) => onCheckboxesChangeHandler(event.target.id)}
              />
              <span>Node</span>
            </label>
          </p>
          <p>
            <label>
              <input
                ref={register}
                type="checkbox"
                name="Angular"
                id="Angular"
                onChange={(event) => onCheckboxesChangeHandler(event.target.id)}
              />
              <span>Angular</span>
            </label>
          </p>
        </div>
      </Wrapper>
    </>
  );
};

export default Technologies;

interface PropsType {
  onCheckboxesChangeHandler: (id: string) => void;
  register: any;
}

const Wrapper = styled.div`
  display: grid;
  grid-template: 1fr / 1fr 1fr;
`;
