import { useRouter } from "next/router";
import { useDestino } from "@/hooks/useDestino";

const DeleteDestino = () => {
  const router = useRouter();
  const { codigo } = router.query;

  const { deleteDestino } = useDestino()

  return (

    <div>

      <h1>Excluir Destino</h1>
      <table style={{ marginLeft: "20px" }}>
        <tbody>
          <tr>
            <td>
              <label>ID do Destino a ser excluído:</label>
            </td>
            <td>
              <input
                readOnly
                type="text"
                value={codigo}
                onChange={(e) => setDestinoId(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button onClick={deleteDestino(codigo)}>Excluir Destino</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DeleteDestino;