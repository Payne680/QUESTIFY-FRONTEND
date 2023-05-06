import CheckboxComponent from '../../Atoms/Checkbox/Checkbox';
// import CopyToClipboardButton from '../../Atoms/ClipBoard/ClipBoard';
import LinearWithValueLabel from '../../Atoms/LinearProgessBar/ProgressBar';
import RatingComponent from '../../Atoms/Rating/Rating';

const columns = [
  {
    field: 'task',
    headerName: 'TASK',
    flex: 2,
  },
  {
    field: 'selfAassesement',
    headerName: 'SELF ASSESEMENT',
    flex: 1,
    renderCell: () => <RatingComponent />,
  },
  {
    field: 'progress',
    headerName: 'PROGRESS',
    renderCell: ({ row: { progress } }) => (
      <LinearWithValueLabel value={+progress} />
    ),
    flex: 1,
  },
  {
    field: 'assignee',
    headerName: 'ASSIGNEE',
    flex: 1,
  },
  {
    field: 'dueDate',
    headerName: 'DATE DUE',
    flex: 1,
  },
  {
    field: 'seen',
    headerName: 'SEEN',
    renderCell: () => <CheckboxComponent />,
    flex: 1,
  },
  {
    field: 'PARTNER COMMENTS',
    headerName: 'PARTNER COMMENTS',
    flexDirection: 'row',
    renderCell: () => <>somthing</>,
    flex: 1,
  },
];

export default columns;
