import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
//import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import ReactPaginate from 'react-paginate';
import Postman from '../utils/service';

let counter = 0;

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const rows = [
  { id: 'name', numeric: false, disablePadding: false, label: 'Company Name' },
  { id: 'city', numeric: true, disablePadding: false, label: 'City' },
  { id: 'state', numeric: true, disablePadding: false, label: 'State' },
  { id: 'currentEmployeeNumber', numeric: true, disablePadding: false, label: 'Employees' },
  { id: 'exEmployeeNumber', numeric: true, disablePadding: false, label: '6 Month Growth(%)' },
  { id: 'leadInvestors', numeric: true, disablePadding: false, label: 'Accelerator/Investor' },
  { id: 'linkedin', numeric: true, disablePadding: false, label: 'Links' },
  { id: 'ranking', numeric: true, disablePadding: false, label: 'Current Ranking' },
];

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { order, orderBy, numSelected, rowCount } = this.props;

    return (
      <TableHead>
        <TableRow>
          {rows.map(
            row => (
              <TableCell
                key={row.id}
                align={'right'}
                padding={row.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            ),
            this,
          )}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 1,
  },
  table: {
    minWidth: 820,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class EnhancedTable extends React.Component {
  constructor(){
    super();
    this.state = {
      order: 'asc',
      orderBy: 'name',
      offset: 0,
      selected: [],
      data: [],
      page: 0,
      rowsPerPage: 10,
      tableData:[],
      pageCount:0,
    };
    this.flag=false;
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy }, ()=>this.getData());
   // console.log("order; orderBy", order, orderBy)
  };
  handleClick = (event, id) => {
    const { selected } = this.state;
    console.log("selected id:", id)
    const selectedIndex = selected.indexOf(id);
    //this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;
  getData = () => {
    const { order, orderBy, offset, rowsPerPage } = this.state

    Postman.getCompanies(order, orderBy, offset, rowsPerPage)
          .then(res=>{
            console.log(res)
            this.setState({tableData:res.data.data, pageCount: res.data.totalCount/rowsPerPage})
          })
  }
  componentDidMount(){
    //Get Data
    this.getData();
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   //console.log(nextState)
  //   //return true
  //   // if (!this.flag)
  //   //   {this.flag=true; return true; }
  //   //console.log("KKKKKKKKKKKKK")
  //   return (this.state.orderBy != nextState.orderBy)||(this.state.offset != nextState.offset)||(this.state.order != nextState.order)||(this.state.tableData.length==0);

  // }
  // componentWillUpdate(){
  //   this.getData();
  // }
  handlePageClick = ({selected}) => {
    console.log("handlePageClick:", selected*this.state.rowsPerPage)
    this.setState({offset: selected*this.state.rowsPerPage}, ()=>{this.getData()})
  }
  render() {
    const { classes } = this.props;
    const { data, order, orderBy, selected, page, rowsPerPage, tableData } = this.state;
    //TODO list
    const emptyRows = rowsPerPage;

    return (
      <div>
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {tableData.map(n => {
                  const isSelected = this.isSelected(n.id);
                  return (
                    <TableRow
                      hover
                      onClick={event => this.handleClick(event, n.id)}
                      role="checkbox"               
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={n.id}
                      selected={isSelected}
                    >
                      <TableCell align="right">{n.name}</TableCell>
                      <TableCell align="right">{n.city}</TableCell>
                      <TableCell align="right">{n.state}</TableCell>
                      <TableCell align="right">{n.currentEmployeeNumber}</TableCell>
                      <TableCell align="right">{n.exEmployeeNumber}</TableCell>
                      <TableCell align="right">{n.leadInvestors}</TableCell>
                      <TableCell align="right">{n.linkedin}</TableCell>
                      <TableCell align="right">{33}</TableCell>
                    </TableRow>
                  );
                })}
              {/* {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )} */}
            </TableBody>
          </Table>
        </div>
      </Paper>
      <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
    </div>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);