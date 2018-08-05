port module Ports exposing (setTitle, sendMessage)


port setTitle : String -> Cmd msg


port sendMessage : (String -> msg) -> Sub msg
