import './App.scss';

function App() {
  return (
    <table>
      {/* <tr>
        <th></th>
        <th></th>
        <th></th>
      </tr> */}
      <tr>
        <td rowspan="8" colspan="3" className='td-img'> <img class=""
            src='https://firebasestorage.googleapis.com/v0/b/signature-email-efddf.appspot.com/o/logo.png?alt=media&token=d0656466-caf6-4902-87f0-1658fb5ce762'
            alt="Grapefruit slice atop a pile of other slices"/></td>
        <td>Keryan Sanié</td>
      </tr>
      <tr>
        <td>Dirigeant | Freelance</td>
      </tr>
      <tr>
        <td className='td-skip-a-line'></td>
      </tr>
      <tr>
        <td>Dev-in-net</td>
      </tr>
      <tr>
        <td>48 Rue Andy Warhol, 34000 Montpellier</td>
      </tr>
      <tr>
        <td>06 34 17 20 14 | keryan.sanie@gmail.com</td>
      </tr>
      <tr>
        <td className='td-skip-a-line'></td>
      </tr>
      <tr>
        <td>https://devinnet.fr</td>
      </tr>
    </table>
  );
}

export default App;
