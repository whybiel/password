import { useState, useRef } from "react";
import * as S from "./style"
import sucess from "./assets/sucess.png"
import visible from "./assets/view.png"
import invisible from "./assets/invisible.png"

export default function App() {
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordInputConfirm, setPasswordInputConfirm] = useState("");
  const [msg, setMsg] = useState("");

  const [view, setView] = useState(false);
  const [tipo, setTipo] = useState("password");

  const [confirm, setConfirm] = useState(false);
  const [tipeConfirm, setTipeConfirm] = useState("password");

  const refMsg = useRef("");
  const refInputConfirm = useRef("");
  const refInputPass = useRef("");

  function Confirm() {
    if (passwordInput === passwordInputConfirm && passwordInput !== "") {
      setMsg("Senha alterada com sucesso!");
      refMsg.current.style.color = "black";
    } else {
      setMsg("As senhas não coincidem");
      refMsg.current.style.color = "red";
      refInputConfirm.current.style.border = "1px red solid";
      refInputPass.current.style.border = "1px red solid";
    }
  }

  function handleView() {
    if (view === false) {
      setView(true);
      setTipo("text");
    } else {
      setView(false);
      setTipo("password");
    }
  }

  function handleView2() {
    if (confirm === false) {
      setConfirm(true);
      setTipeConfirm("text");
    } else {
      setConfirm(false);
      setTipeConfirm("password");
    }
  }

  return (
    <S.Container>
      <S.GlobalStyle/>
      {msg === "Senha alterada com sucesso!" ? 
      <S.Box>
        <S.AlignBox>
          <S.P ref={refMsg}>{msg}</S.P>
          <S.Sucess src={sucess}/>
        </S.AlignBox>
      </S.Box> 
      : 
      <S.Box>
        <S.Title>Esqueceu sua senha</S.Title>

        <S.SubTitle>Digite sua nova senha:</S.SubTitle>
        
        <S.DisplayBox>
          <S.Input
            ref={refInputPass}
            value={passwordInput}
            placeholder="Digite sua senha"
            type={tipo}
            onChange={(e) => {
              setPasswordInput(e.target.value);
            }}
          />
          <S.View onClick={() => {handleView()}}>{tipo === "password" ? <S.Eye src={visible}/> : <S.Eye src={invisible} />}</S.View>
        </S.DisplayBox>

        <S.SubTitle>Confirme a senha:</S.SubTitle>
        
        <S.DisplayBox>
          <S.Input
            ref={refInputConfirm}
            value={passwordInputConfirm}
            placeholder="Digite novamente sua senha"
            type={tipeConfirm}
            onChange={(e) => {setPasswordInputConfirm(e.target.value)}}
          />

          <S.View onClick={() => {handleView2()}}>{tipeConfirm === "password" ? <S.Eye src={visible}/> : <S.Eye src={invisible} />}</S.View>
        </S.DisplayBox>
        
        <S.BtnConfirm onClick={() => {Confirm()}}>Confirma</S.BtnConfirm>
        
        <p ref={refMsg}>{msg}</p>
      </S.Box>
      }
    </S.Container>
  );
}
