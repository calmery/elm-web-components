module Update exposing (Msg(GetMessage), update)

import Model exposing (Model)


type Msg
    = GetMessage String


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        GetMessage message ->
            message ! []
