import {Optional, Some, None} from './Optional';
import * as Either from './Either';
import {Try, Success, Failure} from './Try';
import {Future} from './Future';

var scalike = {
  Optional: Optional,
  Some: Some,
  None: None,

  Right: Either.Right,
  Left: Either.Left,

  Try: Try,
  Success: Success,
  Failure: Failure,

  Future: Future
};

export = scalike
