module Main exposing (..)

import Html exposing (programWithFlags)
import Flags exposing (decodeFlags)
import Model exposing (Model)
import Ports exposing (setTitle, sendMessage)
import Update exposing (Msg(GetMessage), update)
import View exposing (view)


init : String -> ( Model, Cmd Msg )
init value =
    let
        decoded =
            decodeFlags value

        message =
            case decoded of
                Ok flags ->
                    flags.message

                Err _ ->
                    ""
    in
        message ! [ setTitle "Elm Web Components" ]


subscriptions : Model -> Sub Msg
subscriptions model =
    sendMessage GetMessage


main : Program String Model Msg
main =
    programWithFlags
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
