import * as React from 'react';
import * as PropTypes from 'prop-types';

type Props = {
  roles: Array<string>,
  currentRole: string,
  children: Array<React.ReactNode>,
}

export const UserRole = ({ roles, currentRole, children }: Props): React.ReactNode | null =>
  children[roles.findIndex(role => role === currentRole)] ?? null;

UserRole.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentRole: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired
};
