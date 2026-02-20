import { makeStyles } from '@material-ui/core/styles';

export const useMainPaperStyles = makeStyles(
  (theme) => ({
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      background: theme.palette.background.default,
    },
    homepage: {
      width: '100%',
      maxWidth: 1200,
      margin: '24px auto 0',
      padding: '0 16px 32px',
      display: 'flex',
      alignItems: 'flex-start',
      gap: 24,
      boxSizing: 'border-box',
      [theme.breakpoints.down('md')]: {
        maxWidth: 860,
        gap: 16,
        padding: '0 12px 24px',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'block',
        padding: '0 8px 20px',
        marginTop: 12,
      },
    },
    postsPanel: {
      flex: 1,
      minWidth: 0,
    },
  }),
  { index: 1 }
);

export const useNavStyles = makeStyles(
  (theme) => ({
    leftPortion: {
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
    },
    logoWrapper: {
      marginRight: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.down('xs')]: {
        marginRight: theme.spacing(1),
      },
    },
    logo: {
      fontWeight: 700,
      textTransform: 'none',
      fontSize: '1.15rem',
      letterSpacing: '-0.3px',
      whiteSpace: 'nowrap',
      padding: '4px 8px',
    },
    user: {
      marginRight: 10,
    },
    titleButton: {
      textTransform: 'none',
      fontSize: 18,
      marginRight: 12,
    },
    navButtons: {
      borderRadius: 6,
      '&:hover': {
        backgroundColor: theme.palette.type === 'dark' ? '#ffffff14' : '#ff63140f',
      },
    },
    search: {
      flexGrow: 0.6,
      maxWidth: 480,
      [theme.breakpoints.down('sm')]: {
        flexGrow: 1,
        maxWidth: 'none',
        padding: '0 4px',
      },
    },
    searchBtn: {
      padding: '6px',
    },
  }),
  { index: 1 }
);

export const useAuthStyles = (authType) =>
  makeStyles(
    (theme) => ({
      authWrapper: {
        display: 'flex',
        flexDirection: authType === 'login' ? 'row' : 'row-reverse',
        [theme.breakpoints.down('xs')]: {
          flexDirection: 'column',
          marginTop: 10,
        },
      },
      form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 24,
        paddingRight: 24,
        paddingBottom: 24,
        [theme.breakpoints.down('xs')]: {
          padding: '0 0 16px',
        },
      },
      formTitle: {
        textAlign: 'center',
        marginBottom: '0.5em',
        [theme.breakpoints.down('xs')]: {
          fontSize: '1.4rem',
        },
      },
      switchText: {
        textAlign: 'center',
        marginBottom: '1.2em',
        [theme.breakpoints.down('xs')]: {
          marginBottom: 8,
          fontSize: '0.9rem',
        },
      },
      submitButton: {
        marginTop: '1.6em',
        padding: '10px',
      },
      input: {
        display: 'flex',
        alignItems: 'flex-end',
      },
      inputIcon: {
        marginRight: 8,
        color: theme.palette.text.secondary,
      },
      sidePanel: {
        padding: 20,
        margin: 'auto 0',
        background: theme.palette.type === 'dark'
          ? 'linear-gradient(135deg, #1f2937 0%, #111827 100%)'
          : 'linear-gradient(135deg, #fff5f0 0%, #ffe8dc 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: '8px 0 0 8px',
      },
      divider: {
        marginLeft: 32,
        marginRight: 32,
      },
    }),
    { index: 1 }
  );

export const useDialogStyles = makeStyles(
  (theme) => ({
    dialogWrapper: {
      padding: 0,
      overflow: 'hidden',
    },
    createPostWrapper: {
      display: 'flex',
      width: 'auto',
      borderRadius: 8,
      marginBottom: 12,
      padding: '8px 12px',
      alignItems: 'center',
      border: `1px solid ${theme.palette.divider}`,
      background: theme.palette.background.paper,
      '&:hover': {
        border: `1px solid ${theme.palette.primary.main}`,
      },
      transition: 'border-color 0.2s',
    },
    createBtn: {
      marginLeft: 10,
      textTransform: 'none',
      justifyContent: 'flex-start',
      flexGrow: 1,
      borderRadius: 6,
      color: theme.palette.text.secondary,
      border: `1.5px solid ${theme.palette.divider}`,
      padding: '7px 14px',
      '&:hover': {
        background: theme.palette.type === 'dark' ? '#ffffff08' : '#f8f9fa',
        border: `1.5px solid ${theme.palette.primary.main}`,
        color: theme.palette.text.primary,
      },
    },
    fab: {
      position: 'fixed',
      bottom: theme.spacing(3),
      right: theme.spacing(3),
      zIndex: 1000,
    },
    iconGroup: {
      display: 'flex',
      gap: 6,
    },
    dialogTitle: {
      fontSize: '1.1rem',
      fontWeight: 600,
    },
    createSubBtn: {
      marginTop: '1em',
    },
    defaultAvatar: {
      backgroundColor: theme.palette.primary.main,
      color: '#fff',
    },
  }),
  { index: 1 }
);

export const useAlertStyles = makeStyles(
  (theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
      marginTop: '0.8em',
      marginBottom: '0.8em',
    },
  }),
  { index: 1 }
);

export const usePostListStyles = makeStyles(
  (theme) => ({
    root: {
      width: '100%',
      marginBottom: '0.5em',
    },
    loadBtnWrapper: {
      display: 'flex',
      justifyContent: 'center',
      padding: '16px 0',
    },
    loadBtn: {
      width: '160px',
      borderRadius: 20,
    },
    noSubscribedPosts: {
      textAlign: 'center',
      marginTop: '5em',
      padding: '2em',
    },
    loadSpinner: {
      textAlign: 'center',
      marginTop: '6em',
      marginBottom: '4em',
    },
  }),
  { index: 1 }
);

export const useCardStyles = makeStyles(
  (theme) => ({
    root: {
      display: 'flex',
      width: '100%',
      borderRadius: 8,
      marginBottom: 10,
      cursor: 'pointer',
      transition: 'border-color 0.15s, box-shadow 0.15s',
      border: `1px solid ${theme.palette.divider}`,
      background: theme.palette.background.paper,
      '&:hover': {
        borderColor: theme.palette.primary.main,
        boxShadow: theme.palette.type === 'dark'
          ? '0 2px 12px rgba(255,99,20,0.15)'
          : '0 2px 12px rgba(255,99,20,0.1)',
      },
    },
    votesWrapper: {
      display: 'flex',
      flexDirection: 'column',
      width: 36,
      minWidth: 36,
      alignItems: 'center',
      padding: '8px 0',
      borderRadius: '8px 0 0 8px',
      background: theme.palette.type === 'light'
        ? 'rgba(0,0,0,0.03)'
        : 'rgba(255,255,255,0.04)',
    },
    thumbnailWrapper: {
      alignSelf: 'center',
      marginLeft: 8,
      marginRight: 2,
    },
    thumbnail: {
      fontSize: '1.8em',
      width: 72,
      height: 88,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: theme.palette.type === 'light'
        ? 'rgba(0,0,0,0.04)'
        : 'rgba(255,255,255,0.05)',
      borderRadius: 6,
      overflow: 'hidden',
      [theme.breakpoints.down('xs')]: {
        width: 56,
        height: 72,
      },
    },
    thumbnailIcon: {
      color: theme.palette.text.secondary,
      fontSize: '1.8rem',
    },
    postInfoWrapper: {
      padding: '10px 12px 6px',
      paddingBottom: 4,
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
    },
    userAndDate: {
      marginLeft: 8,
    },
    commentsBtn: {
      textTransform: 'none',
      fontSize: '0.8rem',
      fontWeight: 600,
      color: theme.palette.text.secondary,
      borderRadius: 4,
      padding: '4px 8px',
      '&:hover': {
        background: theme.palette.type === 'dark' ? '#ffffff14' : '#ff63140f',
        color: theme.palette.primary.main,
      },
    },
    title: {
      fontWeight: 600,
      fontSize: '0.95rem',
      lineHeight: 1.4,
      marginBottom: 4,
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.88rem',
      },
    },
    bottomBtns: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 4,
      gap: 4,
    },
  }),
  { index: 1 }
);

export const usePostFormStyles = makeStyles(
  (theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '16px 24px 24px',
      flexGrow: 1,
      [theme.breakpoints.down('xs')]: {
        padding: '12px 12px 16px',
      },
    },
    formTitle: {
      textAlign: 'center',
      marginBottom: '0.5em',
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.3rem',
      },
    },
    submitButton: {
      marginTop: '1.6em',
      padding: '10px',
    },
    input: {
      display: 'flex',
      alignItems: 'flex-end',
      marginTop: '0.8em',
    },
    inputIcon: {
      marginRight: 8,
      color: theme.palette.primary.main,
    },
    inputIconText: {
      padding: '2px 0 0 0',
      marginRight: 8,
      fontWeight: 700,
      fontSize: '1.1rem',
      wordBreak: 'keep-all',
      color: theme.palette.primary.main,
    },
    typeBtnGroup: {
      marginBottom: 8,
      borderRadius: 8,
    },
    imageInput: {
      marginTop: '1em',
    },
    imageBtnsWrapper: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 8,
    },
    imagePreview: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '0.7em',
      '& img': {
        borderRadius: 8,
        border: `1px solid ${theme.palette.divider}`,
      },
    },
    clearSelectionBtn: {
      padding: '0.25em',
    },
    selectBtn: {
      textTransform: 'none',
    },
    textInput: {
      display: 'flex',
      alignItems: 'flex-start',
      marginTop: '1.2em',
    },
  }),
  { index: 1 }
);

export const usePostCommentsStyles = makeStyles(
  (theme) => ({
    mainPaper: {
      marginTop: '0.5em',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 8,
      minHeight: '90vh',
      border: `1px solid ${theme.palette.divider}`,
      background: theme.palette.background.paper,
    },
    topPortion: {
      display: 'flex',
    },
    votesWrapper: {
      display: 'flex',
      flexDirection: 'column',
      width: 44,
      minWidth: 44,
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '8px 0',
      background: theme.palette.type === 'light'
        ? 'rgba(0,0,0,0.03)'
        : 'rgba(255,255,255,0.04)',
      borderRadius: '8px 0 0 0',
      [theme.breakpoints.down('xs')]: {
        width: 36,
        minWidth: 36,
      },
    },
    postDetails: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      padding: '16px',
      minWidth: 0,
    },
    title: {
      fontWeight: 700,
      fontSize: '1.1rem',
      marginBottom: '0.8em',
      lineHeight: 1.4,
    },
    imagePost: {
      textAlign: 'center',
      margin: '12px 0',
    },
    image: {
      maxWidth: '60%',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '85%',
      },
      [theme.breakpoints.down('xs')]: {
        maxWidth: '100%',
      },
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: 8,
    },
    bottomBar: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '0.8em',
      gap: 4,
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.85rem',
        flexWrap: 'wrap',
      },
    },
    bottomButton: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '0.85rem',
      fontWeight: 600,
      color: theme.palette.text.secondary,
      borderRadius: 4,
      padding: '4px 8px',
      '&:hover': {
        background: theme.palette.type === 'dark' ? '#ffffff14' : '#ff63140f',
        color: theme.palette.primary.main,
      },
    },
    commentIcon: {
      marginRight: 6,
      fontSize: '1.1rem',
    },
    commentsContainer: {
      padding: '0 16px 16px',
      [theme.breakpoints.down('xs')]: {
        padding: '0 8px 12px',
      },
    },
    divider: {
      marginBottom: '1em',
    },
    wholeComment: {
      marginBottom: '0.8em',
    },
    commentWrapper: {
      display: 'flex',
      borderRadius: 6,
      '&:hover': {
        background: theme.palette.type === 'dark' ? '#ffffff05' : '#00000005',
      },
    },
    commentVotesWrapper: {
      display: 'flex',
      flexDirection: 'column',
      width: 28,
      minWidth: 28,
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 6,
    },
    commentDetails: {
      display: 'flex',
      flexDirection: 'column',
      padding: '8px 12px',
      paddingTop: '6px',
      width: '100%',
      minWidth: 0,
    },
    replyWrapper: {
      marginBottom: '0.2em',
      display: 'flex',
      marginLeft: '2.5em',
      borderLeft: `2px solid ${theme.palette.divider}`,
      paddingLeft: '0.5em',
      marginTop: '0.2em',
    },
    noCommentsBanner: {
      textAlign: 'center',
      marginTop: '5em',
      padding: '2em',
    },
    loadSpinner: {
      textAlign: 'center',
      marginTop: '8em',
    },
  }),
  { index: 1 }
);

export const useCommentInputStyles = makeStyles(
  (theme) => ({
    wrapper: {
      margin: '8px 16px 16px',
      padding: 12,
      borderRadius: 8,
      border: `1px solid ${theme.palette.divider}`,
      background: theme.palette.background.paper,
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    commentBtn: {
      alignSelf: 'flex-end',
      marginTop: '0.4em',
      borderRadius: 20,
    },
  }),
  { index: 1 }
);

export const useCommentAndBtnsStyles = makeStyles(
  (theme) => ({
    inputDiv: {
      display: 'flex',
      flexDirection: 'column',
    },
    submitBtns: {
      alignSelf: 'flex-end',
      marginTop: '0.3em',
    },
    btnStyle: {
      textTransform: 'none',
      fontSize: '0.8rem',
      fontWeight: 600,
      color: theme.palette.text.secondary,
      borderRadius: 4,
      padding: '3px 8px',
      '&:hover': {
        background: theme.palette.type === 'dark' ? '#ffffff14' : '#ff63140f',
        color: theme.palette.primary.main,
      },
    },
    btnBar: {
      display: 'flex',
      gap: 2,
    },
    cancelBtn: {
      marginRight: '0.2em',
      marginTop: '0.1em',
    },
  }),
  { index: 1 }
);

export const useUserPageStyles = makeStyles(
  (theme) => ({
    mainPaper: {
      marginTop: '0.5em',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 8,
      minHeight: '90vh',
      paddingBottom: '1em',
      border: `1px solid ${theme.palette.divider}`,
      background: theme.palette.background.paper,
    },
    userInfoWrapper: {
      margin: '0',
      padding: '24px',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      background: theme.palette.type === 'dark'
        ? 'linear-gradient(180deg, #1f2937 0%, transparent 100%)'
        : 'linear-gradient(180deg, #fff5f0 0%, transparent 100%)',
      borderRadius: '8px 8px 0 0',
      borderBottom: `1px solid ${theme.palette.divider}`,
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        gap: 16,
        padding: '16px',
      },
    },
    itemWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8,
    },
    avatarWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
    },
    rightWrapper: {
      flexGrow: 0.3,
      display: 'flex',
      justifyContent: 'space-between',
      gap: 24,
    },
    twoItemsDiv: {
      textAlign: 'center',
    },
    avatar: {
      width: '5em',
      height: '5em',
      border: `3px solid ${theme.palette.primary.main}`,
      [theme.breakpoints.down('xs')]: {
        width: '3.5em',
        height: '3.5em',
      },
    },
    cakeDay: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
    },
    postsPaper: {
      margin: '12px',
    },
    loadBtnWrapper: {
      display: 'flex',
      justifyContent: 'center',
      padding: '16px 0',
    },
    loadBtn: {
      width: '160px',
      borderRadius: 20,
    },
    noPosts: {
      textAlign: 'center',
      marginTop: '5em',
      padding: '2em',
    },
    loadSpinner: {
      textAlign: 'center',
      marginTop: '8em',
    },
  }),
  { index: 1 }
);

export const useUserPostCardStyles = makeStyles(
  (theme) => ({
    mainPaper: {
      display: 'flex',
      marginBottom: '10px',
      textDecoration: 'none',
      borderRadius: 8,
      border: `1px solid ${theme.palette.divider}`,
      transition: 'border-color 0.15s, box-shadow 0.15s',
      background: theme.palette.background.paper,
      '&:hover': {
        borderColor: theme.palette.primary.main,
        boxShadow: theme.palette.type === 'dark'
          ? '0 2px 8px rgba(255,99,20,0.12)'
          : '0 2px 8px rgba(255,99,20,0.08)',
      },
    },
    votesWrapper: {
      display: 'flex',
      flexDirection: 'column',
      width: 44,
      minWidth: 44,
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '8px 0',
      background: theme.palette.type === 'light'
        ? 'rgba(0,0,0,0.03)'
        : 'rgba(255,255,255,0.04)',
      borderRadius: '8px 0 0 8px',
      [theme.breakpoints.down('xs')]: {
        width: 36,
        minWidth: 36,
      },
    },
    title: {
      fontWeight: 600,
      fontSize: '0.95rem',
      marginBottom: '0.5em',
      lineHeight: 1.4,
    },
    imagePost: {
      textAlign: 'center',
      margin: '8px 0',
    },
    image: {
      width: '30%',
      [theme.breakpoints.down('xs')]: {
        width: '45%',
      },
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: 6,
    },
    postInfo: {
      paddingTop: '10px',
      padding: '10px 14px',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      minWidth: 0,
    },
    commentsBtn: {
      marginTop: '0.5em',
      textTransform: 'none',
      fontSize: '0.8rem',
      fontWeight: 600,
      color: theme.palette.text.secondary,
      borderRadius: 4,
      padding: '3px 8px',
      alignSelf: 'flex-start',
      '&:hover': {
        background: theme.palette.type === 'dark' ? '#ffffff14' : '#ff63140f',
        color: theme.palette.primary.main,
      },
    },
  }),
  { index: 1 }
);

export const useSubPageStyles = makeStyles(
  (theme) => ({
    mainPaper: {
      marginTop: '0.5em',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 8,
      minHeight: '90vh',
      paddingBottom: '1em',
      border: `1px solid ${theme.palette.divider}`,
      background: theme.palette.background.paper,
    },
    subInfoWrapper: {
      margin: 0,
      padding: '20px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: theme.palette.type === 'dark'
        ? 'linear-gradient(180deg, #1f2937 0%, transparent 100%)'
        : 'linear-gradient(180deg, #fff5f0 0%, transparent 100%)',
      borderRadius: '8px 8px 0 0',
      borderBottom: `1px solid ${theme.palette.divider}`,
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 12,
        padding: '14px 12px',
      },
    },
    iconText: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      [theme.breakpoints.down('xs')]: {
        justifyContent: 'center',
      },
    },
    secondPanel: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
    },
    joinBtn: {
      borderRadius: 20,
      minWidth: 80,
    },
    description: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 6,
      [theme.breakpoints.down('xs')]: {
        justifyContent: 'center',
      },
    },
    inputDiv: {
      display: 'flex',
      flexDirection: 'column',
    },
    submitBtns: {
      alignSelf: 'flex-end',
      marginTop: '0.2em',
    },
    firstPanel: {
      [theme.breakpoints.down('xs')]: {
        textAlign: 'center',
      },
    },
    loadBtnWrapper: {
      display: 'flex',
      justifyContent: 'center',
      padding: '16px 0',
    },
    loadBtn: {
      width: '160px',
      borderRadius: 20,
    },
    noPosts: {
      textAlign: 'center',
      marginTop: '5em',
      padding: '2em',
    },
    loadSpinner: {
      textAlign: 'center',
      marginTop: '8em',
    },
  }),
  { index: 1 }
);

export const useSortTabStyles = makeStyles(
  (theme) => ({
    mainPaper: {
      borderRadius: 8,
      marginBottom: '10px',
      border: `1px solid ${theme.palette.divider}`,
      background: theme.palette.background.paper,
      [theme.breakpoints.down('xs')]: {
        borderRadius: 6,
        marginBottom: '6px',
      },
    },
  }),
  { index: 1 }
);

export const useSubPanelStyles = makeStyles(
  (theme) => ({
    mainPaper: {
      width: 300,
      minWidth: 280,
      maxWidth: 320,
      borderRadius: 8,
      border: `1px solid ${theme.palette.divider}`,
      padding: '16px',
      position: 'sticky',
      top: 76,
      background: theme.palette.background.paper,
      [theme.breakpoints.down('md')]: {
        width: 260,
        minWidth: 240,
      },
    },
    listPaper: {
      padding: '4px 0',
    },
    title: {
      textAlign: 'center',
      fontWeight: 700,
      marginBottom: '1em',
      fontSize: '0.9rem',
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      color: theme.palette.text.secondary,
    },
    listItem: {
      fontSize: '0.875rem',
    },
    listWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px',
      padding: '4px 0',
      borderBottom: `1px solid ${theme.palette.divider}`,
      '&:last-child': {
        borderBottom: 'none',
        marginBottom: 0,
      },
    },
  }),
  { index: 1 }
);

export const useSubredditFormStyles = makeStyles(
  (theme) => ({
    formWrapper: {
      [theme.breakpoints.down('xs')]: {
        marginTop: 10,
      },
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '16px 24px 24px',
      [theme.breakpoints.down('xs')]: {
        padding: '12px 12px 16px',
      },
    },
    formTitle: {
      textAlign: 'center',
      marginBottom: '0.5em',
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.3rem',
      },
    },
    submitButton: {
      marginTop: '1.6em',
      marginBottom: '0.5em',
      padding: '10px',
    },
    input: {
      display: 'flex',
      alignItems: 'flex-end',
    },
    inputIcon: {
      marginRight: 8,
      color: theme.palette.primary.main,
    },
    inputIconText: {
      padding: '2px 0 0 0',
      marginRight: 8,
      fontWeight: 700,
      fontSize: '1.1rem',
      wordBreak: 'keep-all',
      color: theme.palette.primary.main,
    },
    descInput: {
      display: 'flex',
      alignItems: 'flex-start',
      marginTop: '1.2em',
    },
  }),
  { index: 1 }
);

export const useUserMenuStyles = makeStyles(
  (theme) => ({
    userBtn: {
      textTransform: 'none',
      display: 'flex',
      borderRadius: 8,
      padding: '4px 10px',
      border: `1px solid ${theme.palette.divider}`,
      '&:hover': {
        background: theme.palette.type === 'dark' ? '#ffffff14' : '#00000008',
        borderColor: theme.palette.primary.light,
      },
    },
    avatar: {
      width: theme.spacing(4),
      height: theme.spacing(4),
      marginRight: '0.4em',
      backgroundColor: theme.palette.primary.main,
      color: '#fff',
      fontSize: '0.9rem',
      fontWeight: 700,
    },
    userBtnMob: {},
    navItems: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
    },
    karmaWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
    },
  }),
  { index: 1 }
);

export const useAvatarFormStyles = makeStyles(
  (theme) => ({
    root: {
      marginTop: '1em',
    },
    title: {
      textAlign: 'center',
      marginBottom: '0.5em',
    },
    selectBtn: {
      textTransform: 'none',
    },
    clearSelectionBtn: {
      padding: '0.25em',
    },
    imageBtnsWrapper: {
      display: 'flex',
      alignItems: 'flex-end',
      marginTop: '1em',
      gap: 8,
    },
    imagePreview: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '0.7em',
    },
    submitButton: {
      marginTop: '1.4em',
    },
    currentAvatar: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '0.5em',
    },
    currentAvatarText: {
      marginRight: '0.5em',
    },
  }),
  { index: 1 }
);

export const useSearchPageStyles = makeStyles(
  (theme) => ({
    mainPaper: {
      marginTop: '0.5em',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 8,
      minHeight: '90vh',
      paddingBottom: '1em',
      border: `1px solid ${theme.palette.divider}`,
      background: theme.palette.background.paper,
    },
    infoPaper: {
      padding: '12px 16px',
      display: 'flex',
      alignItems: 'flex-start',
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    noResults: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '4em',
      padding: '2em',
      gap: 12,
    },
    sorryIcon: {
      fontSize: '4em',
      color: theme.palette.text.secondary,
    },
    loadBtnWrapper: {
      display: 'flex',
      justifyContent: 'center',
      padding: '16px 0',
    },
    loadBtn: {
      width: '160px',
      borderRadius: 20,
    },
  }),
  { index: 1 }
);

export const useSortCommentsStyles = makeStyles(
  (theme) => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      padding: '8px 16px',
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    label: {
      marginRight: 10,
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      color: theme.palette.text.secondary,
      fontSize: '0.85rem',
      fontWeight: 600,
    },
  }),
  { index: 1 }
);

export const useNotFoundPageStyles = makeStyles(
  (theme) => ({
    mainPaper: {
      marginTop: '0.5em',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 8,
      minHeight: '90vh',
      paddingBottom: '1em',
      textAlign: 'center',
      border: `1px solid ${theme.palette.divider}`,
      background: theme.palette.background.paper,
    },
    textWrapper: {
      marginTop: '20%',
      padding: '2em',
    },
    icon: {
      fontSize: '6em',
      color: theme.palette.primary.main,
      marginBottom: '0.3em',
    },
  }),
  { index: 1 }
);
