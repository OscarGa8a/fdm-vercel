import { User_permissions } from './auth/types/User';

export interface UserError {
    field: string;
    message: string;
}

export interface DialogProps {
    open: boolean;
    onClose: () => void;
}

export interface ListSettings<TColumn extends string = string> {
    columns?: TColumn[];
    rowNumber: number;
}

export enum ListViews {
    ATTRIBUTE_LIST = 'ATTRIBUTE_LIST',
    CATEGORY_LIST = 'CATEGORY_LIST',
    COLLECTION_LIST = 'COLLECTION_LIST',
    CUSTOMER_LIST = 'CUSTOMER_LIST',
    DRAFT_LIST = 'DRAFT_LIST',
    NAVIGATION_LIST = 'NAVIGATION_LIST',
    ORDER_LIST = 'ORDER_LIST',
    PAGES_LIST = 'PAGES_LIST',
    PLUGINS_LIST = 'PLUGIN_LIST',
    PRODUCT_LIST = 'PRODUCT_LIST',
    PRODUCT_TYPE_LIST = 'PRODUCT_TYPE_LIST',
    SALES_LIST = 'SALES_LIST',
    SHIPPING_METHODS_LIST = 'SHIPPING_METHODS_LIST',
    STAFF_MEMBERS_LIST = 'STAFF_MEMBERS_LIST',
    VOUCHER_LIST = 'VOUCHER_LIST',
    WEBHOOK_LIST = 'WEBHOOK_LIST'
}

export interface ListProps<TColumns extends string = string> {
    disabled: boolean;
    pageInfo?: {
        hasNextPage: boolean;
        hasPreviousPage: boolean;
    };
    settings?: ListSettings<TColumns>;
    onNextPage: () => void;
    onPreviousPage: () => void;
    onRowClick: (id: string) => () => void;
    onUpdateListSettings?: (
        key: keyof ListSettings<TColumns>,
        value: any
    ) => void;
    onListSettingsReset?: () => void;
}

export interface SortPage<TSortKey extends string> {
    sort: Sort<TSortKey>;
    onSort: (field: TSortKey, id?: string) => void;
}

export interface PageListProps<TColumns extends string = string>
    extends ListProps<TColumns> {
    defaultSettings?: ListSettings<TColumns>;
    onAdd: () => void;
}

export interface SearchPageProps {
    initialSearch: string;
    onSearchChange: (value: string) => void;
}


export interface TabPageProps {
    currentTab: number;
    tabs: string[];
    onAll: () => void;
    onTabChange: (tab: number) => void;
    onTabDelete: () => void;
    onTabSave: () => void;
}

export interface Node {
    id: string;
}

export type FormErrors<TKeys extends string> = Partial<Record<TKeys, string>>;

export type Pagination = Partial<{
    after: string;
    before: string;
}>;

export type Dialog<TDialog extends string> = Partial<{
    action: TDialog;
}>;
export type ActiveTab<TTab extends string = string> = Partial<{
    activeTab: TTab;
}>;
export type Filters<TFilters extends string> = Partial<Record<TFilters, string>>;
export type FiltersWithMultipleValues<TFilters extends string> = Partial<Record<TFilters, string[]>>;
export type FiltersAsDictWithMultipleValues<TFilters extends string> = Partial<Record<TFilters, Record<string, string[]>>>;
export type Search = Partial<{
    query: string;
}>;
export type SingleAction = Partial<{
    id: string;
}>;
export type Sort<TSort extends string = string> = Partial<{
    asc: boolean;
    sort: TSort;
}>;
export type BulkAction = Partial<{
    ids: string[];
}>;

export interface ReorderEvent {
    oldIndex: number;
    newIndex: number;
}

export type ReorderAction = (event: ReorderEvent) => void;

export interface FetchMoreProps {
    loading: boolean;
    hasMore: boolean;
    onFetchMore: () => void;
}

export type TabActionDialog = 'save-search' | 'delete-search';

export interface UserPermissionProps {
    userPermissions: User_permissions[];
}

export type MinMax = Record<'min' | 'max', string>;

export interface FilterOpts<T> {
    active: boolean;
    value: T;
}
