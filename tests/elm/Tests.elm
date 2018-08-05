module Tests exposing (..)

import Tuple exposing (first)
import Test exposing (..)
import TestExp exposing (..)
import Model exposing (Model)
import Update exposing (Msg(GetMessage), update)
import Flags exposing (decodeFlags)


updateTest : Model
updateTest =
    first (update (GetMessage "Hello World") "")


decodeFlagsTest : String
decodeFlagsTest =
    let
        decoded =
            decodeFlags "{ \"message\": \"Hello World !\" }"
    in
        case decoded of
            Ok flags ->
                flags.message

            Err _ ->
                ""


all : Test
all =
    describe "Elm Tests"
        [ "Update"
            => updateTest
            === "Hello World"
        , "Decode Flags"
            => decodeFlagsTest
            === "Hello World !"
        ]
