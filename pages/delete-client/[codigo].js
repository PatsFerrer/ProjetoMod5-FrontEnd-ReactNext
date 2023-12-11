import { useRouter } from "next/router";
import { useCliente } from "@/hooks/useCliente";

const DeleteClient = () => {
  const router = useRouter();
  const { codigo } = router.query;

  const { deleteCliente } = useCliente()

  return (

    <div>

      <h1>Excluir Cliente</h1>
      <table style={{ marginLeft: "20px" }}>
        <tbody>
          <tr>
            <td>
              <label>ID do Cliente a ser excluído:</label>
            </td>
            <td>
              <input
                readOnly
                type="text"
                value={codigo}
                onChange={(e) => setClientId(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button onClick={deleteCliente(codigo)}>Excluir Cliente</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DeleteClient;